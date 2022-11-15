import objHealth from "../basic";

test('status health', () => {
    const value = {name: 'Маг', health: 90};
    const result = objHealth(value);
    expect(result).toBe('healthy');
});

test('status health', () => {
    const value = {name: 'Маг', health: 25};
    const result = objHealth(value);
    expect(result).toBe('wounded');
});

test('status health', () => {
    const value = {name: 'Маг', health: 5};
    const result = objHealth(value);
    expect(result).toBe('critical');
});