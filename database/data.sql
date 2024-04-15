CREATE TABLE public.participants (
    id SERIAL PRIMARY KEY,
    combatant_name VARCHAR(255),
    image_url VARCHAR(255),
    gold_titles INTEGER,
    silver_titles INTEGER
);

INSERT INTO public.participants (id, combatant_name, image_url, gold_titles, silver_titles)
VALUES 
    (1, 'Boss', 'public/images/site/boss.png', 4, 0),
    (2, 'Deer-Man', 'public/images/site/boss.png', 0, 2),
    (3, 'Thomas Musk', 'public/images/site/boss.png', 0, 1);
CREATE TABLE public.pokemons (
    id SERIAL PRIMARY KEY,
    pokemon_type VARCHAR(255),
    pokemon_name VARCHAR(255)
);
INSERT INTO public.pokemons (id, pokemon_type, pokemon_name)
VALUES 
    (1, 'normal',''),
    (2, 'fire',''),
    (3, 'water',''),
    (4, 'eletric',''),
    (5, 'grass',''),
    (6, 'ice',''),
    (7, 'fighting',''),
    (8, 'poison',''),
    (9, 'ground',''),
    (10, 'flying',''),
    (11, 'psychic',''),
    (12, 'bug',''),
    (13, 'rock',''),
    (14, 'ghost',''),
    (15, 'dragon',''),
    (16, 'dark',''),
    (17, 'steel',''),
    (18, 'fairy','');