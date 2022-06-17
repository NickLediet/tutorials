import process from 'process'
import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

/**
 * - takes json via stdin
 * - takes a key to query
 * - the key to fetch can be a nested key recursively retrieved
 *  - the recursive key should be set with a boolean param, incase dot notation is used in
 *    key's name.
 */

const { argv }  = yargs(hideBin(process.argv))

const fetchKey = (key, object, shouldRecurse = true) => {
    const keyParts = key.split('.')
    
    if(keyParts.length <= 0) return false

    if(
        keyParts.length === 1 || 
        !shouldRecurse
    )  {
        return object[key]
    }

    const [head, ...tail] = keyParts

    return fetchKey(tail.join('.'), object[head], shouldRecurse)
}

process.stdin.on('data', (dataBuffer) => {
    const text = dataBuffer.toString('utf-8')
    const data = JSON.parse(text)
    const { key, recurse, r } = argv

        
    const value = fetchKey(key, data, (recurse|r))

    process.stdout.write(value);

    process.exit();
})