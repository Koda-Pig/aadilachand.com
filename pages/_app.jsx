import '../styles/globals.scss'
import MaintenancePage from './maintenance'
const maintenanceMode = false // undergoing website maintenance

function MyApp({ Component, pageProps }) {
  if (maintenanceMode) return <MaintenancePage />
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
