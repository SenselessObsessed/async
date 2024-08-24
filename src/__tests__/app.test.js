import GameSavingLoader from "../js/GameSavingLoader";

test('should be return a gamesave', async () => {
    const saving = await GameSavingLoader.load();
    const jsonSaving = JSON.parse(saving);
    const result = {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000
        }
    }
    expect(jsonSaving).toEqual(result)
});