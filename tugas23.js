const deretBilangan = () => {
    let bilangan = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    let higher = bilangan.filter(deret => deret > 15);

    console.log(higher);
}

deretBilangan();