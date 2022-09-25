import styles from '../../styles/ux-ui/earthdirt/writeup.module.scss'

export default function EarthdirtWriteup() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <h3>concept</h3>
            <p>
              An online shop mock-up of my passion project, earthdirt. Dainty
              handmade jewellery and ceramics
            </p>
          </div>
          <div>
            <h3>inspired by</h3>
            <p>Elements by nature.</p>
          </div>
          <div>
            <h3>my role</h3>
            <p>
              web design, brand development, social media marketing, product
              design &amp; creation, product photography, product management
            </p>
          </div>
        </div>
        <a href="#" className={styles.callToAction}>
          prototype
        </a>
      </div>
    </>
  )
}
