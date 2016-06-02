import { compileHybridFunction } from '../../../../../lib/compiler/es-next/hybrid-function';

fixture `Fixture`;

function compile (fn) {
    return compileHybridFunction(fn.toString());
}

test('Test', () => {
    return compile(() => {
        const { hostname, port } = window.location;

        return `${hostname}:${port}`;
    });
});