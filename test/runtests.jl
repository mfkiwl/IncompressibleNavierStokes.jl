# LSP indexing solution
# https://github.com/julia-vscode/julia-vscode/issues/800#issuecomment-650085983
if isdefined(@__MODULE__, :LanguageServer)
    include("../src/IncompressibleNavierStokes.jl")
    using .IncompressibleNavierStokes
end

using Aqua
using CairoMakie
using IncompressibleNavierStokes
using LinearAlgebra
using Statistics
using Test

@testset "IncompressibleNavierStokes" begin
    include("grid.jl")
    include("pressure_solvers.jl")
    include("models.jl")
    include("solvers.jl")
    include("simulation2D.jl")
    include("simulation3D.jl")
    include("postprocess2D.jl")
    include("postprocess3D.jl")

    @testset "Aqua" begin
        @info "Testing code with Aqua"
        Aqua.test_all(
            IncompressibleNavierStokes;
            ambiguities = false,
            project_toml_formatting = true,
        )
    end
end
