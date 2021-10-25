var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = IncompressibleNavierStokes","category":"page"},{"location":"#IncompressibleNavierStokes","page":"Home","title":"IncompressibleNavierStokes","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for IncompressibleNavierStokes.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [IncompressibleNavierStokes]","category":"page"},{"location":"#IncompressibleNavierStokes.IncompressibleNavierStokes","page":"Home","title":"IncompressibleNavierStokes.IncompressibleNavierStokes","text":"Incompressible Navier-Stokes solvers\n\n\n\n\n\n","category":"module"},{"location":"#IncompressibleNavierStokes.AbstractODEMethod","page":"Home","title":"IncompressibleNavierStokes.AbstractODEMethod","text":"AbstractODEMethod\n\nAbstract ODE method.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.AbstractODEMethodCache","page":"Home","title":"IncompressibleNavierStokes.AbstractODEMethodCache","text":"AbstractODEMethodCache\n\nTime stepper cache.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.AbstractRungeKuttaMethod","page":"Home","title":"IncompressibleNavierStokes.AbstractRungeKuttaMethod","text":"ExplicitRungeKuttaMethod(A, b, c, r)\nImplicitRungeKuttaMethod(A, b, c, r)\n\nRunge Kutta method.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.AdamsBashforthCrankNicolsonMethod","page":"Home","title":"IncompressibleNavierStokes.AdamsBashforthCrankNicolsonMethod","text":"AdamsBashforthCrankNicolsonMethod(; α₁ = 3 // 2, α₂ = -1 // 2, θ = 1 // 2)\n\nAdams-Bashforth for velocity (parameters α₁ and α₂) and Crank-Nicolson for pressure (with implicitness θ).\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.MomentumCache","page":"Home","title":"IncompressibleNavierStokes.MomentumCache","text":"MomentumCache\n\nPreallocation structure for terms in the momentum equations.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.OneLegMethod","page":"Home","title":"IncompressibleNavierStokes.OneLegMethod","text":"OneLegMethod(β = 1 // 2)\n\nOne-leg β-method.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.PressureSolver","page":"Home","title":"IncompressibleNavierStokes.PressureSolver","text":"PressureSolver\n\nLineare pressure solver for the Poisson equation.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.TimeStepper","page":"Home","title":"IncompressibleNavierStokes.TimeStepper","text":"TimeStepper\n\nTime stepper for solving ODEs.\n\n\n\n\n\n","category":"type"},{"location":"#IncompressibleNavierStokes.TimeStepper-Union{Tuple{M}, Tuple{M, Any, Any, Any}} where M","page":"Home","title":"IncompressibleNavierStokes.TimeStepper","text":"TimeStepper(method, setup, V₀, p₀) -> TimeStepper\n\nBuild associated time stepper from method.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.BE11-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.BE11","text":"Backward Euler\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.CHC3-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.CHC3","text":"Chebyshev quadrature and C(3) satisfied. Note this equals Lobatto IIIA\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.CHDIRK3-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.CHDIRK3","text":"Chebyshev based DIRK (not algebraically stable)\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.CN22-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.CN22","text":"Crank-Nicholson\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.DOPRI6-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.DOPRI6","text":"Dormand-Price pair\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.DSRK2-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.DSRK2","text":"CBM's DSRK2\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.DSRK3-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.DSRK3","text":"Zennaro's DSRK3\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.DSso2-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.DSso2","text":"CBM's DSRKso2\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.HEM3-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.HEM3","text":"Brasey and Hairer\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.HEM5-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.HEM5","text":"Brasey and Hairer, 5 stage, 4th order\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.ISSPm2","page":"Home","title":"IncompressibleNavierStokes.ISSPm2","text":"Optimal DIRK SSP schemes of order 2\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.ISSPs3","page":"Home","title":"IncompressibleNavierStokes.ISSPs3","text":"Optimal DIRK SSP schemes of order 3\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.MTE22-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.MTE22","text":"Minimal truncation error 22 method (Heun)\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.Mid22-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.Mid22","text":"Midpoint 22 method\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RIA1-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RIA1","text":"This is implicit Euler\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RK33C2-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RK33C2","text":"RK3 satisfying C(2) for i=3\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RK33P2-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RK33P2","text":"RK3 satisfying the second order condition for the pressure\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RK44-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RK44","text":"Classical fourth order\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RK44C2-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RK44C2","text":"RK4 satisfying C(2) for i=3\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RK44C23-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RK44C23","text":"RK4 satisfying C(2) for i=3 and c2=c3\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.RK44P2-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.RK44P2","text":"RK4 satisfying the second order condition for the pressure (but not third order)\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.SDIRK34-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.SDIRK34","text":"3-stage, 4th order singly diagonally implicit (SSP)\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.Wray3-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.Wray3","text":"Wray's RK3\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.bodyforce!-NTuple{5, Any}","page":"Home","title":"IncompressibleNavierStokes.bodyforce!","text":"bodyforce!(F, ∇F V, t, setup; getJacobian = false)\n\nCompute body force F in momentum equations at velocity points. If getJacobian, also compute ∇F = ∂F/∂V.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.bodyforce-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.bodyforce","text":"bodyforce(V, t, setup; getJacobian = false)\n\nBody force in momentum equations in Finite Volume setting, so integrated dFx, dFy are the Jacobians ∂Fx/∂V and ∂Fy/∂V.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.build_operators!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.build_operators!","text":"build_operators!(setup)\n\nBuild discrete operators.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.change_time_stepper","page":"Home","title":"IncompressibleNavierStokes.change_time_stepper","text":"change_time_stepper(stepper, method) -> AbstractTimeStepper\n\nChange ODE method. Return a new stepper.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.check_input!-NTuple{4, Any}","page":"Home","title":"IncompressibleNavierStokes.check_input!","text":"Check input.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.check_symmetry","page":"Home","title":"IncompressibleNavierStokes.check_symmetry","text":"check_symmetry(V, t, setup, ϵ = 1e-14)\n\nCheck symmetry of convection operator.\n\nflag = 0: no symmetry error flag = 1: symmetry error\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.compute_conservation-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.compute_conservation","text":"compute_conservation(V, t, setup)\n\nCompute mass, momentum and energy conservation properties of velocity field.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.convection!-NTuple{7, Any}","page":"Home","title":"IncompressibleNavierStokes.convection!","text":"convection!(c, ∇c, V, ϕ, t, cache, setup, getJacobian = false) -> c, ∇c\n\nevaluate convective terms c and, optionally, Jacobian ∇c = ∂c/∂V.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.convection-NTuple{4, Any}","page":"Home","title":"IncompressibleNavierStokes.convection","text":"convection(V, ϕ, t, setup, getJacobian = false)\n\nConvenience function for initializing arrays c and ∇c before filling in convection terms.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.convection_components!-NTuple{6, Any}","page":"Home","title":"IncompressibleNavierStokes.convection_components!","text":"convection_components!(c, ∇c, V, ϕ, setup, cache; getJacobian = false, order4 = false)\n\nCompute convection components.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.create_boundary_conditions!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.create_boundary_conditions!","text":"reate_boundary_conditions!(setup)\n\nCreate discrete boundary condtions.\n\nValues should either be scalars or vectors. All values (u, v, p, k, e) are defined at x, y locations, i.e. the corners of pressure volumes, so they cover the entire domain, including corners.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.create_initial_conditions-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.create_initial_conditions","text":"V, p = create_initial_conditions(setup)\n\nCreate initial vectors.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.diffusion!-NTuple{5, Any}","page":"Home","title":"IncompressibleNavierStokes.diffusion!","text":"diffusion!(d, ∇d, V, t, setup; getJacobian = false)\n\nEvaluate diffusive terms d and optionally Jacobian ∇d = ∂d/∂V.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.filter_convection!-NTuple{5, Any}","page":"Home","title":"IncompressibleNavierStokes.filter_convection!","text":"filter_convection!(ū, u, diff_matrix, bc, α)\n\nConstruct filter for convective terms.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.filter_convection-NTuple{4, Any}","page":"Home","title":"IncompressibleNavierStokes.filter_convection","text":"filter_convection(u, diff_matrix, bc, α)\n\nConstruct filter for convective terms.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.get_timestep-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.get_timestep","text":"get_timestep(setup)\n\nEstimate time step based on eigenvalues of operators, using Gershgorin.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.get_velocity-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.get_velocity","text":"get_velocity(V, t, setup)\n\nGet velocity values at pressure points. Interpolate velocities to pressure positions using BMx and BMy (constructed in operator_divergence.jl).\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.get_vorticity-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.get_vorticity","text":"get_vorticity(V, t, setup)\n\nGet vorticity from velocity field.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.initialize!","page":"Home","title":"IncompressibleNavierStokes.initialize!","text":"initialize(pressure_solver)\n\nInitialize pressure solver.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.initialize_rtp-NTuple{4, Any}","page":"Home","title":"IncompressibleNavierStokes.initialize_rtp","text":"initialize_rtp(setup, V, p, t)\n\nInitialize real time plot (RTP).\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.interpolate_ν-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.interpolate_ν","text":"ν_t_ux, ν_t_uy, ν_t_vx, ν_t_vy = interpolate_ν(ν_t, setup)\n\ninterpolate the scalar field νt at pressure locations (xp, yp) to locations needed in computing the diffusive terms, i.e. the ux, uy, vx and v_y locations\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.is_steady","page":"Home","title":"IncompressibleNavierStokes.is_steady","text":"is_steady(problem)\n\nReturns true if problem is unsteady.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.main-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.main","text":"main(setup)\n\nBuild mesh and operators from setup, solve problem, and postprocess. Return solution and timing.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.momentum!-NTuple{8, Any}","page":"Home","title":"IncompressibleNavierStokes.momentum!","text":"momentum!(F, ∇F, V, ϕ, p, t, setup, cache; getJacobian = false, nopressure = false)\n\nCalculate rhs of momentum equations and, optionally, Jacobian with respect to velocity field.\n\nV: velocity field ϕ: \"convection\" field: e.g. ∂(ϕx V)/∂x + ∂(ϕy V)/∂y; usually ϕ = V (so ϕx = u, ϕy = v) p: pressure getJacobian: return ∇F = ∂F/∂V nopressure: exclude pressure gradient; in this case input argument p is not used\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.momentum-NTuple{5, Any}","page":"Home","title":"IncompressibleNavierStokes.momentum","text":"momentum(V, ϕ, p, t, setup; getJacobian = false, nopressure = false)\n\nConvenience function for initializing arrays F and ∇F before filling in momentum terms.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.momentum_allstage!-NTuple{9, Any}","page":"Home","title":"IncompressibleNavierStokes.momentum_allstage!","text":"momentum_allstage!(F, ∇F, V, C, p, t, setup, cache, momentum_cache; getJacobian = false)\n\nCall momentum for multiple (V, p) pairs, as required in implicit RK methods.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.momentum_rom-Tuple{}","page":"Home","title":"IncompressibleNavierStokes.momentum_rom","text":"momentum_rom()\n\nRhs momentum equation for ROM.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.nonuniform_grid","page":"Home","title":"IncompressibleNavierStokes.nonuniform_grid","text":"nonuniform_grid(Δz, z_low, z_up, sz, ϵ = 1e-12)\n\nCenerate a non-uniform grid, from z_low to z_up, starting Δz and having stretch factor close to sz Includes check for uniform grid and, in that case, adapts Δz if necessary.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.nstage-Tuple{IncompressibleNavierStokes.AbstractRungeKuttaMethod}","page":"Home","title":"IncompressibleNavierStokes.nstage","text":"nstage(rk_method)\n\nGet number of stages of the Runge-Kutta method.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.ode_method_cache","page":"Home","title":"IncompressibleNavierStokes.ode_method_cache","text":"ode_method_cache(method, args...; kwargs...)\n\nGet time stepper cache for the given ODE method.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.operator_averaging!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.operator_averaging!","text":"Construct averaging operators.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.operator_convection_diffusion!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.operator_convection_diffusion!","text":"Construct convection and diffusion operators.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.operator_divergence!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.operator_divergence!","text":"Construct divergence and gradient operator\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.operator_interpolation!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.operator_interpolation!","text":"Construct averaging operators.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.operator_postprocessing!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.operator_postprocessing!","text":"operator_postprocessing!(setup)\n\nConstruct postprocessing operators such as vorticity.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.operator_turbulent_diffusion!-Tuple{Any}","page":"Home","title":"IncompressibleNavierStokes.operator_turbulent_diffusion!","text":"operator_turbulent_diffusion!(setup)\n\nAverage (turbulent) viscosity to cell faces: from ν at xp, yp to ν at ux, uy, vx, vy locations\n\nSee also ke_viscosity.jl.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.operator_viscosity!","page":"Home","title":"IncompressibleNavierStokes.operator_viscosity!","text":"operator_viscosity!(model, setup)\n\nClassical turbulence modelling via the diffusive term\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.plot_pressure-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.plot_pressure","text":"Plot pressure.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.plot_streamfunction-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.plot_streamfunction","text":"Plot streamfunction.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.plot_vorticity-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.plot_vorticity","text":"plot_vorticity.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.postprocess-NTuple{4, Any}","page":"Home","title":"IncompressibleNavierStokes.postprocess","text":"Postprocess.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.pressure_additional_solve!-NTuple{6, Any}","page":"Home","title":"IncompressibleNavierStokes.pressure_additional_solve!","text":"Additional pressure solve. make the pressure compatible with the velocity field. this should also result in same order pressure as velocity\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.pressure_poisson!","page":"Home","title":"IncompressibleNavierStokes.pressure_poisson!","text":"pressure_poisson!(solver, p, f, t, setup, tol = 1e-14)\n\nSolve the Poisson equation for the pressure with right hand side f at time t.\n\nWe should have sum(f) = 0 for periodic and no-slip BC.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.rSSPs2","page":"Home","title":"IncompressibleNavierStokes.rSSPs2","text":"Rational (optimal, low-storage) s-stage 2nd order SSP\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.rSSPs3","page":"Home","title":"IncompressibleNavierStokes.rSSPs3","text":"Rational (optimal, low-storage) s^2-stage 3rd order SSP\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.set_bc_vectors!-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.set_bc_vectors!","text":"set_bc_vectors!(setup, t)\n\nConstruct boundary conditions.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.solve","page":"Home","title":"IncompressibleNavierStokes.solve","text":"solve(problem, setup, V₀, p₀)\n\nSolve problem with initial state (V₀, p₀).\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.solve-Tuple{SteadyStateProblem, Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.solve","text":"solve(steady_state_problem, setup, V₀, p₀)\n\nSolve steady state problem of the Navier-Stokes equations. This saddlepoint system arises from linearization of the convective terms.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.solve-Tuple{UnsteadyProblem, Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.solve","text":"solve(unsteady_problem, setup, V₀, p₀)\n\nSolve unsteady_problem.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.solve_steady_ibm!-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.solve_steady_ibm!","text":"solve_steady_ibm!(solution, setup)\n\nSolve ibm.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.solve_steady_ke!-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.solve_steady_ke!","text":"solve_steady_ke!(solution, setup)\n\nSolve ke.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.solve_ubsteady_ke!-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.solve_ubsteady_ke!","text":"solve_unsteady_ke!(solution, setup)\n\nSolve ke.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.solve_unsteady_rom!-Tuple{Any, Any}","page":"Home","title":"IncompressibleNavierStokes.solve_unsteady_rom!","text":"solve_unsteady_rom!(solution, setup)\n\nSolve ke.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.step!","page":"Home","title":"IncompressibleNavierStokes.step!","text":"step!(stepper, Δt)\n\nTake a step of size Δt with the given time stepper.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.step!-Tuple{IncompressibleNavierStokes.TimeStepper{AdamsBashforthCrankNicolsonMethod{S}, T} where {S, T}, Any}","page":"Home","title":"IncompressibleNavierStokes.step!","text":"step!(stepper::AdamsBashforthCrankNicolsonStepper, Δt)\n\nPerform one time step with Adams-Bashforth for convection and Crank-Nicolson for diffusion.\n\ncₙ₋₁ are the convection terms of tₙ₋₁. Output includes convection terms at tₙ, which will be used in next time step in the Adams-Bashforth part of the method.\n\nAdams-Bashforth for convection and Crank-Nicolson for diffusion formulation:\n\n(u^{n+1} - u^{n})/Δt = -(α₁ c^n + α₂ c^{n-1})                        + θ diff^{n+1} + (1-θ) diff^{n}                        + θ F^{n+1} + (1-θ) F^{n}                        + θ BC^{n+1} + (1-θ) BC^{n}                        - G*p + y_p\n\nwhere BC are boundary conditions of diffusion. This is rewritten as:\n\n(I/Δt - θ D) u^{n+1} = (I/Δt - (1-θ) D) u^{n}                      - (α₁ c^n + α₂ c^{n-1})                      + θ F^{n+1} + (1-θ) F^{n}                      + θ BC^{n+1} + (1-θ) BC^{n}                      - G*p + y_p\n\nThe LU decomposition of the LHS matrix is precomputed in operator_convection_diffusion.jl.\n\nNote that, in constrast to explicit methods, the pressure from previous time steps has an influence on the accuracy of the velocity.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.step!-Tuple{IncompressibleNavierStokes.TimeStepper{IncompressibleNavierStokes.ExplicitRungeKuttaMethod{S}, T} where {S, T}, Any}","page":"Home","title":"IncompressibleNavierStokes.step!","text":"step!(stepper::ExplicitRungeKuttaStepper, Δt)\n\nPerform one time step for the general explicit Runge-Kutta method (ERK).\n\nDirichlet boundary points are not part of solution vector but are prescribed in a strong manner via the u_bc and v_bc functions.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.step!-Tuple{IncompressibleNavierStokes.TimeStepper{IncompressibleNavierStokes.ImplicitRungeKuttaMethod{S}, T} where {S, T}, Any}","page":"Home","title":"IncompressibleNavierStokes.step!","text":"step!(stepper::ImplicitRungeKuttaStepper, Δt)\n\nDo one time step for implicit Runge-Kutta method.\n\nUnsteady Dirichlet boundary points are not part of solution vector but are prescribed in a \"strong\" manner via the u_bc and v_bc functions.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.step!-Tuple{IncompressibleNavierStokes.TimeStepper{OneLegMethod{S}, T} where {S, T}, Any}","page":"Home","title":"IncompressibleNavierStokes.step!","text":"step!(stepper::OneLegStepper, Δt)\n\nDo one time step using one-leg-β-method following symmetry-preserving discretization of turbulent flow. See [Verstappen and Veldman (JCP 2003)] for details, or [Direct numerical simulation of turbulence at lower costs (Journal of Engineering Mathematics 1997)].\n\nFormulation: frac(beta + 12) u^n+1 - 2 beta u^n + (beta - 12) u^n-1Delta t = F((1 + beta) u^n - beta u^n-1)\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.strain_tensor-Tuple{Any, Any, Any}","page":"Home","title":"IncompressibleNavierStokes.strain_tensor","text":"strain_tensor(V, t, setup; getJacobian = false, get_S_abs = false)\n\nEvaluate rate of strain tensor S(V) and its magnitude.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.turbulent_viscosity","page":"Home","title":"IncompressibleNavierStokes.turbulent_viscosity","text":"turbulent_viscosity(model, S_abs)\n\nCompute turbulent viscosity based on S_abs.\n\n\n\n\n\n","category":"function"},{"location":"#IncompressibleNavierStokes.update_rtp!-NTuple{5, Any}","page":"Home","title":"IncompressibleNavierStokes.update_rtp!","text":"update_rtp!(rtp, setup, V, p, t)\n\nUpdate real time plot.\n\n\n\n\n\n","category":"method"},{"location":"#IncompressibleNavierStokes.vorticity!-NTuple{4, Any}","page":"Home","title":"IncompressibleNavierStokes.vorticity!","text":"vorticity!(ω, V, t, setup)\n\nCompute vorticity values at pressure midpoints. This should be consistent with operator_postprocessing.jl.\n\n\n\n\n\n","category":"method"}]
}
