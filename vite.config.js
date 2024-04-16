import react from '@vitejs/plugin-react'
import path from "path";

module.exports = {
  plugins: [react()],
  build: {
    outDir: path.join(__dirname, "build")
  },
  base: "/daisycompsci/"
}