export default function Maintenance() {
  return (
    <main
      style={{
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background:
          'url(/images/background-latest.png) center / cover no-repeat fixed'
      }}
    >
      <h1 style={{ marginBottom: '2rem', fontSize: '3rem' }}>
        undergoing maintenance
      </h1>
      <p style={{ fontSize: '1.5rem' }}>i&apos;ll be back soon!</p>
    </main>
  )
}
