import CMS from 'netlify-cms-app'
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx'

console.log('Registering MDX', MdxControl)

CMS.registerWidget('mdx', MdxControl, MdxPreview)
