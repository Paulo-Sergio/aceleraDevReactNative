import React from 'react';
import Profile from './Profile';
import renderer from 'react-test-renderer';
import { ActivityIndicator } from 'react-native';

describe('Profile Initial', () => {
  it('Should have the codenation logo', () => {
    const instance = renderer.create(<Profile />).root;

    expect(instance.findByProps({className: 'header-image'}).props.source.uri).toEqual("https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png");
  })
})

describe('Profile Normal', () => {
  it('Should have a loading', () => {
    const instance = renderer.create(<Profile />).root;

    expect(instance.findAllByType(ActivityIndicator).length).toBe(1)
  })

  it('Should have the user name after loading it', done => {
    const instance = renderer.create(<Profile />).root;

    setTimeout(() => {
      expect(instance.findByProps({className: 'profile-name'}).children[0].children[0]).toBe('Rafael Fuzifaru Cianci')

      done();
    }, 660)
  })

  it('Should have the user profile image after loading it', done => {
    const instance = renderer.create(<Profile />).root;

    setTimeout(() => {
      expect(instance.findByProps({className: "profile-image"}).props.source.uri).toBe('https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm');

      done();
    }, 660)
  })

  describe('labels', () => {
    it('Should have the linkedin label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[0].children[0].children[0]).toBe('Linkedin:')
        done()
      }, 650)
    })

    it('Should have the github label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[2].children[0].children[0]).toBe('Github:')
        done()
      }, 650)
    })

    it('Should have the e-mail label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[4].children[0].children[0]).toBe('E-mail:')
        done()
      }, 650)
    })

    it('Should have the phone label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[6].children[0].children[0]).toBe('Celular:')
        done()
      }, 650)
    })

    it('Should have the birthday label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[8].children[0].children[0]).toBe('Data de Nascimento:')
        done()
      }, 650)
    })

    it('Should have the gender label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[10].children[0].children[0]).toBe('Sexo:')
        done()
      }, 650)
    })

    it('Should have the languages label', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-label'})[12].children[0].children[0]).toBe('Idiomas:')
        done()
      }, 650)
    })
  })

  describe('user values', () => {
    it('Should have the linkedin value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-value'})[0].children[0].children[0]).toBe('https://www.linkedin.com/in/rafaelcianci')
        done()
      }, 650)
    })

    it('Should have the github value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-value'})[2].children[0].children[0]).toBe('http://github.com/rafacianci')
        done()
      }, 650)
    })

    it('Should have the e-mail value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-value'})[4].children[0].children[0]).toBe('rafaelfuzifaru@gmail.com')
        done()
      }, 650)
    })

    it('Should have the phone value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-value'})[6].children[0].children[0]).toBe('(48) 99120-3585')
        done()
      }, 650)
    })

    it('Should have the birthday value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-value'})[8].children[0].children[0]).toBe('27/04/1993')
        done()
      }, 650)
    })

    it('Should have the gender value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-value'})[10].children[0].children[0]).toBe('Masculino')
        done()
      }, 650)
    })

    it('Should have the languages value', done => {
      const instance = renderer.create(<Profile />).root;

      setTimeout(() => {
        expect(instance.findAllByProps({className: 'contact-language'})[0].children[0].children[0]).toBe('Português - PT')
        expect(instance.findAllByProps({className: 'contact-language'})[2].children[0].children[0]).toBe('Inglês - EN')
        expect(instance.findAllByProps({className: 'contact-language'})[4].children[0].children[0]).toBe('Japonês - JA')
        done()
      }, 650)
    })
  })
})

describe('Contact Content', () => {
  it('Should have an opacity after loading the content', done => {
    const instance = renderer.create(<Profile />).root;

    setTimeout(() => {

      const styleObj = instance.findAllByProps({className: 'contact-content'})[0].props.style.reduce
        ? instance.findAllByProps({className: 'contact-content'})[0].props.style.reduce((prev, curr) => ({ ...prev, ...curr }), {})
        : instance.findAllByProps({className: 'contact-content'})[0].props.style;

      const styleObj2 = instance.findAllByProps({className: 'contact-content'})[1].props.style.reduce
        ? instance.findAllByProps({className: 'contact-content'})[1].props.style.reduce((prev, curr) => ({ ...prev, ...curr }), {})
        : instance.findAllByProps({className: 'contact-content'})[1].props.style;

      expect(Object.keys(styleObj).includes('opacity')).toBe(true)
      expect(Object.keys(styleObj2).includes('opacity')).toBe(true)
      done();
    }, 670)
  })
})
