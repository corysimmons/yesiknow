$_$wp(1);
function createPerson(name, age, sex, favoriteFood, running, hitPoints, damage) {
    $_$wf(1);
    return $_$w(1, 0), {
        name: name,
        age: age,
        sex: sex,
        favoriteFood: favoriteFood,
        running: running,
        hitPoints: hitPoints,
        damage: damage
    };
}
var olivesPerson = ($_$w(1, 1), createPerson('Piggoffuufuu', 800, 'female', 'noodles with chicken tenders on top', true, 10000000, 16000));
var badPerson = ($_$w(1, 2), createPerson('BadPerson McFoot', 6, 'male', 'Farts', false, 24000, 13000));
$_$w(1, 3), $_$wv(1, 3, '1,3', 'olivesPerson.hitPoints = olivesPerson.hi...', olivesPerson.hitPoints = olivesPerson.hitPoints - ($_$w_(1, 5), $_$wv(1, 5, '1,5', 'badPerson.damage', badPerson.damage, '$_$ne', 0, 0, '')), '$_$ne', 0, 0, '');
$_$w(1, 4), $_$wv(1, 4, '1,4', 'badPerson.hitPoints = badPerson.hitPoint...', badPerson.hitPoints = badPerson.hitPoints - ($_$w_(1, 6), $_$wv(1, 6, '1,6', 'olivesPerson.damage', olivesPerson.damage, '$_$ne', 0, 0, '')), '$_$ne', 0, 0, '');
$_$wpe(1);