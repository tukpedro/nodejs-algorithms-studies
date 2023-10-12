const LinkedList = require('./linked-list');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('should append nodes to the end of the list', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    test('should insert nodes at the specified index', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.insert(1, 4);

        expect(list.toArray()).toEqual([1, 4, 2, 3]);
    });

    test('should remove nodes at the specified index', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.remove(1);

        expect(list.toArray()).toEqual([1, 3]);
    });

    test('should get the data at the specified index', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.get(1)).toBe(2);
    });

    test('should get the index of the first occurrence of the specified data', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.indexOf(2)).toBe(1);
    });

    test('should convert the linked list to an array', () => {
        list.append(1);
        list.append(2);
        list.append(3);

        expect(list.toArray()).toEqual([1, 2, 3]);
    });
});
