// https://github.com/producthunt./chai-enzyme

import EntryPreview from '../components/EntryPreview'
import { mount, render, shallow } from 'enzyme'

describe('EntryPreview', () => {
	const entry = {
		title: 'First Entry',
		url: 'http://www.google.com',
		description: 'This is the description:'
	}

	it('shows entry title', () => {
		const component = mount(<EntryPreview entry={entry} />)
		expect(component.find('h3')).to.have.length(1)
		expect(component.find('h3')).to.contain.text('First Entry') 
	})

	it('shows entry description', () => {
		const component = mount(<EntryPreview entry={entry} />)
		expect(component.find('h4')).to.have.length(1)
		expect(component.find('h4')).to.contain.text('This is the description:')
	})

	it('shows entry link', () => {
		const component = mount(<EntryPreview entry={entry} />)
		expect(component.find('a')).to.have.attr('href').equal('http://www.google.com')
		expect(component.find('a')).to.contain.text('http://www.google.com') 
	})
})