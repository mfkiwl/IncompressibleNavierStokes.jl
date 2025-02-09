# Little LSP hack to get function signatures, go    #src
# to definition etc.                                #src
if isdefined(@__MODULE__, :LanguageServer)          #src
    include("../src/IncompressibleNavierStokes.jl") #src
    using .IncompressibleNavierStokes               #src
end                                                 #src

# # Decaying Homogeneous Isotropic Turbulence - 3D
#
# In this example we consider decaying homogeneous isotropic turbulence,
# similar to the cases considered in [Kochkov2021](@cite) and
# [Kurz2022](@cite). The initial velocity field is created randomly, but with a
# specific energy spectrum. Due to viscous dissipation, the turbulent features
# eventually group to form larger visible eddies.

# We start by loading packages.
# A [Makie](https://github.com/JuliaPlots/Makie.jl) plotting backend is needed for plotting. `GLMakie` creates an interactive window (useful for real-time
# plotting), but does not work when building this example on GitHub.
# `CairoMakie` makes high-quality static vector-graphics plots.

using FFTW
#md using CairoMakie
using GLMakie #!md
using IncompressibleNavierStokes

# Case name for saving results
name = "DecayingTurbulence3D"

# Floating point precision
T = Float32

# To use CPU: Do not move any arrays
device = identity

# To use GPU, use `cu` to move arrays to the GPU.
# Note: `cu` converts to Float32
## using CUDA
## device = cu

# Viscosity model
viscosity_model = LaminarModel(; Re = T(10_000))

# A 3D grid is a Cartesian product of three vectors
n = 32
lims = (T(0), T(1))
x = LinRange(lims..., n + 1)
y = LinRange(lims..., n + 1)
z = LinRange(lims..., n + 1)
# plot_grid(x, y, z)

# Build setup and assemble operators
setup = Setup(x, y, z; viscosity_model);

# Since the grid is uniform and identical for x, y, and z, we may use a
# specialized spectral pressure solver
pressure_solver = SpectralPressureSolver(setup);

# Initial conditions
V₀, p₀ = random_field(setup; A = T(1_000_000), σ = T(30), s = 5, pressure_solver)

# Time interval
t_start, t_end = tlims = (T(0), T(1.0))

# Iteration processors
processors = (
    field_plotter(device(setup); nupdate = 10),
    energy_history_plotter(device(setup); nupdate = 10),
    energy_spectrum_plotter(device(setup); nupdate = 10),
    ## animator(device(setup), "vorticity.mp4"; nupdate = 4),
    ## vtk_writer(setup; nupdate = 10, dir = "output/$name", filename = "solution"),
    ## field_saver(setup; nupdate = 10),
    step_logger(; nupdate = 1),
);

# Solve unsteady problem
V, p, outputs = solve_unsteady(
    setup,
    V₀,
    p₀,
    tlims;
    Δt = T(0.001),
    processors,
    pressure_solver,
    inplace = true,
    device,
);

# Field plot
outputs[1]

# Energy history
outputs[2]

# Energy spectrum
outputs[3]

# ## Post-process
#
# We may visualize or export the computed fields `(V, p)`

# Export to VTK
save_vtk(setup, V, p, t_end, "output/solution")

# Plot pressure
plot_pressure(setup, p)

# Plot velocity
plot_velocity(setup, V, t_end)

# Plot vorticity
plot_vorticity(setup, V, t_end)
