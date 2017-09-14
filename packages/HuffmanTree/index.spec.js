import expect from 'expect';
import HuffmanTree from './index';

describe('src/HuffmanTree', () => {
    let tree;
    describe('Given no parameters', () => {
        describe('When creating a HuffmanTree', () => {
            beforeEach(() => {
                tree = new HuffmanTree();
            });

            it('should not have data', () => {
                expect(tree.getData()).toBeFalsy();
            });

            it('should not have a left subtree', () => {
                expect(tree.getLeftSubtree()).toBeTruthy();
            });

            it('should not have a right subtree', () => {
                expect(tree.getRightSubtree()).toBeTruthy();
            });
        })
    });

    describe('Given an empty HuffmanTree', () => {
        beforeEach(() => {
            tree = new HuffmanTree();
        });

        describe('When adding a character and code with only 0s', () => {
            beforeEach(() => {
                tree.add('e', '00');
            });

            it('should not be empty', () => {
                expect(tree.isEmpty()).toBeFalsy();
            });

            it('should be able to decode the code', () => {
                expect(tree.decode('00')).toEqual('e');
            });
        });

        describe('When adding a character and code with only 1s', () => {
            beforeEach(() => {
                tree.add('e', '11');
            });

            it('should not be empty', () => {
                expect(tree.isEmpty()).toBeFalsy();
            });

            it('should be able to decode the code', () => {
                expect(tree.decode('11')).toEqual('e');
            });
        });

        describe('When adding a character and code containing 0s and 1s', () => {
            beforeEach(() => {
                tree.add('e', '001');
            });

            it('should not be empty', () => {
                expect(tree.isEmpty()).toBeFalsy();
            });

            it('should be able to decode the code', () => {
                expect(tree.decode('001')).toEqual('e');
            });

            it('should not be able to decode an unknown code', () => {
                expect(tree.decode('00')).toEqual('?');
            });
        });
    });

    describe('Given a HuffmanTree with a map of the english alphabet to bitstrings', () => {
        beforeEach(() => {
            const alphabetMap = {
                a: '1010',
                b: '10000',
                c: '00000',
                d: '10110',
                e: '010',
                f: '110011',
                g: '100010',
                h: '0001',
                i: '0110',
                j: '1100001011',
                k: '11000011',
                l: '10111',
                m: '110010',
                n: '0111',
                o: '1001',
                p: '100001',
                q: '1100001001',
                r: '0010',
                s: '0011',
                t: '1101',
                u: '00001',
                v: '1100000',
                w: '110001',
                x: '1100001000',
                y: '100011',
                z: '1100001010',
                ' ': '111'
            };
            tree = new HuffmanTree();
            for(let key in alphabetMap) {
                tree.add(key, alphabetMap[key]);
            }
        });
        describe('When decoding a string containing only english letters.', () => {
            it('should not be empty', () => {
                expect(tree.isEmpty()).toBeFalsy();
            });

            it('should be able to decode the bit string that corresponds to the letter a', () => {
                expect(tree.decode('1010')).toEqual('a');
            });

            it('should be able to decode the bit string that corresponds to the word walker', () => {
                expect(tree.decode('110001101010111110000110100010')).toEqual('walker');
            });
        });
    });
});



