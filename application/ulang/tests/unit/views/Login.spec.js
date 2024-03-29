import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Login from '@/views/Login.vue'


describe('Login Tests', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)
  let store, getters, wrapper

  beforeEach(() => {
    getters = {
      getUserId: () => '12345'
    }
    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          getters
        }
      }
    })
    wrapper = shallowMount(Login, {
      store,
      localVue
    })
  })

  it('should display all necessary fields to login', () => {
    expect(wrapper.find('#username').exists()).to.be.true
    expect(wrapper.find('#password').exists()).to.be.true
    expect(wrapper.find('button').exists()).to.be.true
  })

})
