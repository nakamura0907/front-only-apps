/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    typescript: {
        tsconfigPath: "tsconfig.build.json"
    }
}

module.exports = nextConfig
