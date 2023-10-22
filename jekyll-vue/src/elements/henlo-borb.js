// Thanks to: https://johnfraney.ca/blog/vue-static-site-web-component-custom-elements/
import { defineCustomElement } from 'vue'

import HenloBorb from '@/components/HenloBorb.vue'

customElements.define('henlo-borb', defineCustomElement(HenloBorb))
