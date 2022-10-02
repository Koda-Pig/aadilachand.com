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
            <p>
              The process of pottery and its relation to the elements of nature.
              Using earth (clay) and water to create something that is
              solidified by fire and air.
            </p>
          </div>
          <div>
            <h3>my role</h3>
            <p>
              web design, brand development, social media marketing, product
              design &amp; creation, product photography, product management
            </p>
          </div>
        </div>
        <a
          href="https://www.figma.com/file/fBFBTL3piLExHjGTS5HBga/earthdirt?node-id=1101%3A1063"
          target="_blank"
          rel="noreferrer"
          className={styles.callToAction}
        >
          prototype
        </a>
      </div>
    </>
  )
}
