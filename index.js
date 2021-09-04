import { python } from 'pythonia'

console.log('bla')

export default async function getAssignments(subdomain, keys) {

    const viggoscrape = await python('viggoscrape')
    const data = await viggoscrape.get_assignments(subdomain, keys)
    python.exit()
    
    return data
}