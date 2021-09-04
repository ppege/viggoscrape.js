import { python } from 'pythonia'

export default async function getAssignments(subdomain, keys) {

    const viggoscrape = await python('viggoscrape')
    const data = await viggoscrape.get_assignments(subdomain, keys)
    python.exit()
    
    return data
}