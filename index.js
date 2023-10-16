/*1. Даны два массива. Один массив содержит в себе названия глав, а второй массив соответсвующие номера страниц. Количество элементов в обоих массивах одинаково.
   Нужно вывести в консоль попарно в виде оглавления все названия и соответсвующие им страницы. Минимальная длина всей страницы 20 символов. Если сумма длин
   номера страницы и названия главы превышает 20 символов, то между ними должна быть 1 точка гарантированно*/

console.clear();

{
    const titles = ['Заголовок 1', 'Самый длинный заголовок во всей книжке', 'Заголовок 2'];
    const pages = [10, 20, 123456789012345];

    const maxLength = 20;

    for (let i = 0; i < titles.length; ++i) {

        let result;
        let dotsCount = maxLength - String(pages[i]).length;

        if (titles[i].length >= dotsCount) {
            result = titles[i].concat('.', String(pages[i]))
        } else {
            result = titles[i].padEnd(dotsCount, '.').concat(String(pages[i]));
        }

        console.log(result);
    }
}