import { mountSuspended } from '@nuxt/test-utils/runtime'
import { expect, it, describe } from 'vitest'
import AppNumber from '@/components/AppNumber.vue'

describe('AppNumber', () => {
  it('can mount component', async () => {
    const component = await mountSuspended(AppNumber)
    expect(component.html()).toContain('Number')
  })
})
