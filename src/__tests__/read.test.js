import GameSavingLoader from "../js/GameSavingLoader";

test('should be an error of reject', async () => {
    const read = jest
    .fn()
    .mockRejectedValue(new Error('Неверное сохранение!'));
    
    expect(GameSavingLoader.load()).rejects.toThrow('Неверное сохранение!')
});