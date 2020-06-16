const timeMap = {
    day: 1,
    week: 7,
    month: 30,
    year: 365,
};

export const resourceSpend = (consumables, MGLT) => {
    const [quantity, time] = consumables.split(' ');
    const lastChar = time.substr(-1);

    if (lastChar === 's') {
        return (
            MGLT *
            Number(quantity) *
            timeMap[time.substr(0, time.length - 1)] *
            24
        );
    }
    return MGLT * Number(quantity) * timeMap[time] * 24;
};
