import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';

@Module({ namespaced: true })
export default class WineBox extends VuexModule {
  show = false

  @Mutation
  SET_SHOW(value: boolean) {
    this.show = value;
  }

  @Action({ commit: 'SET_SHOW' })
  // eslint-disable-next-line class-methods-use-this
  open() {
    return true;
  }

  @Action({ commit: 'SET_SHOW' })
  // eslint-disable-next-line class-methods-use-this
  close() {
    return false;
  }
}
