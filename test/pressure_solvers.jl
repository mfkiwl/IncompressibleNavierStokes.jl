@testset "Pressure solvers" begin
    T = Float64

    ## Viscosity model
    viscosity_model = LaminarModel{T}(; Re = 1000)

    ## Convection model
    convection_model = NoRegConvectionModel()

    ## Boundary conditions
    u_bc(x, y, t) = 0.0
    v_bc(x, y, t) = 0.0
    bc = create_boundary_conditions(
        u_bc,
        v_bc;
        bc_unsteady = false,
        bc_type = (;
            u = (; x = (:periodic, :periodic), y = (:periodic, :periodic)),
            v = (; x = (:periodic, :periodic), y = (:periodic, :periodic)),
        ),
        T,
    )

    ## Grid
    x = stretched_grid(0, 2π, 20)
    y = stretched_grid(0, 2π, 20)
    grid = create_grid(x, y; bc, T)

    ## Forcing parameters
    bodyforce_u(x, y) = 0.0
    bodyforce_v(x, y) = 0.0
    force = SteadyBodyForce(bodyforce_u, bodyforce_v, grid)

    ## Build setup and assemble operators
    setup = Setup(; viscosity_model, convection_model, grid, force, bc)
    (; A) = setup.operators

    ## Pressure solver
    direct = DirectPressureSolver(setup)
    cg = CGPressureSolver(setup)
    fourier = FourierPressureSolver(setup)

    initial_pressure(x, y) = 1 / 4 * (cos(2x) + cos(2y))
    p_exact = reshape(initial_pressure.(grid.xpp, grid.ypp), :)
    f = A * p_exact

    p_direct = IncompressibleNavierStokes.pressure_poisson!(direct, copy(p_exact), f)
    p_cg = IncompressibleNavierStokes.pressure_poisson!(cg, copy(p_exact), f)
    p_fourier = IncompressibleNavierStokes.pressure_poisson!(fourier, copy(p_exact), f)

    @test_broken p_direct ≈ p_exact # `A` is really badly conditioned
    @test p_cg ≈ p_exact
    @test p_fourier ≈ p_exact
end
