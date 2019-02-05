import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CListGroup',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    flush: Boolean,
  },
  render (h, { props, data, children }) {
    const componentData = {
      staticClass: 'list-group',
      class: { 'list-group-flush': props.flush }
    }
    return h(props.tag, mergeData(data, componentData), children)
  }
}