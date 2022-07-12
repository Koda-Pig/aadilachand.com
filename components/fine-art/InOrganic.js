import style from '../../styles/fine-art/InOrganic.module.css'
import { InstagramEmbed } from 'react-social-media-embed'

/* https://www.npmjs.com/package/react-social-media-embed 
https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--fluid-width*/

export default function InOrganic() {
  return (
    <div className={style.inOrganic}>
      <div className={style.container}>
        <section className={style.section}>
          <h2>(in)organic</h2>
          <h5>installation</h5>
          <h5>2019</h5>
          <p>
            Patterned pathways of interconnectedness exist within us but perhaps
            years of conditioning have rewired our brains a bit too far by
            inadvertently accepting the dismally concrete reality that has
            become ever-present and normalized. (in) organic explores the
            complex and intricate relationship between humans and nature,
            touching on the Anthropocene- the current era we live in whereby
            humans are the dominant and most influential force on Earth and the
            workings of the natural world.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CDTu8ywnTB_/"
              width={328}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
