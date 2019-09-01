import React from 'react';
import Acceleration from './Acceleration';
import AccelerationItem from '../components/AccelerationItem';
import renderer from 'react-test-renderer';
import { FlatList, Text } from 'react-native';

describe('Acceleration Initial', () => {
  test('Should have the codenation logo', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[0].props.source).toEqual({ uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png" });
  })
})

describe('Acceleration Normal', () => {
  test('Should have a list of accelerations', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(FlatList).length).toBe(1)
  })

  test('Should have a list of accelerations', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(AccelerationItem).length).toBe(6)
  })

  test('Should have the image from the acceleration json', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[1].props.source).toEqual({
      uri: "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg"
    })

    expect(instance.findAllByType('Image')[6].props.source).toEqual({
      uri: "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg"
    })
  })

  test('Should have the acceleration title', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[0].children[0].children[0]).toBe('Acelerações')
  })

  test('Should have the acceleration name for each acceleration', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[1].children[0].children[0]).toBe('React Native')
    expect(instance.findAllByType(Text)[4].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[7].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[10].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[13].children[0].children[0]).toBe('ADxp Data Science')
    expect(instance.findAllByType(Text)[16].children[0].children[0]).toBe('Python Women')
  })

  test('Should have the acceleration location for each acceleration', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[2].children[0].children[0]).toBe('Online')
    expect(instance.findAllByType(Text)[5].children[0].children[0]).toBe('DevHub Joinville, SC')
    expect(instance.findAllByType(Text)[8].children[0].children[0]).toBe('DevHub Joinville, SC')
    expect(instance.findAllByType(Text)[11].children[0].children[0]).toBe('a confirmar')
    expect(instance.findAllByType(Text)[14].children[0].children[0]).toBe('a confirmar')
    expect(instance.findAllByType(Text)[17].children[0].children[0]).toBe('Online')
  })
})

describe('Acceleration Advanced', () => {
  test('Should have the default image when it comes blank from acceleration json', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType('Image')[2].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })

    expect(instance.findAllByType('Image')[3].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })

    expect(instance.findAllByType('Image')[4].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })

    expect(instance.findAllByType('Image')[5].props.source).toEqual({
      uri: "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png"
    })
  })

  test('Should have the acceleration date for each acceleration', () => {
    const instance = renderer.create(<Acceleration />).root;

    expect(instance.findAllByType(Text)[3].children[0].children[0]).toBe('28/07/2019')
    expect(instance.findAllByType(Text)[6].children[0].children[0]).toBe('19/08/2019')
    expect(instance.findAllByType(Text)[9].children[0].children[0]).toBe('20/08/2019')
    expect(instance.findAllByType(Text)[12].children[0].children[0]).toBe('23/09/2019')
    expect(instance.findAllByType(Text)[15].children[0].children[0]).toBe('24/09/2019')
    expect(instance.findAllByType(Text)[18].children[0].children[0]).toBe('11/08/2019')
  })
})