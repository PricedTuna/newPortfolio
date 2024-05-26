import { Box } from '@mui/material'
function ProjectImage() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img loading='lazy' width={400} style={{borderWidth: 30, borderColor: "pink", border: "solid", borderRadius: 30}} src='https://images.unsplash.com/photo-1709487229575-769eea1b8c8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </Box>
    </Box>
  )
}

export default ProjectImage
