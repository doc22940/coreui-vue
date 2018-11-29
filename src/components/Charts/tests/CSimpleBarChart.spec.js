import Component from "../CSimpleBarChart";
const ComponentName = 'CSimpleBarChart'

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('has default props functions', () => {
    expect(typeof Component.props.finalOptions.default).toBe('function')
    expect(typeof Component.props.data.default).toBe('function')
  })
  it('functions are returning valid default data', () => {
    expect(typeof Component.props.finalOptions.default()).toBe('object')
    expect(typeof Component.props.data.default()).not.toBe('undefined')
  })
});
