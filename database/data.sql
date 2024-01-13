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
    (2, 'Deer-Man', 'public/images/siteb/boss.png', 0, 2),
    (3, 'Thomas Musk', 'public/images/site/boss.png', 0, 1);
CREATE TABLE public.pokemons (
    id SERIAL PRIMARY KEY,
    gallery VARCHAR(255)
);
INSERT INTO public.pokemons (id, gallery)
VALUES 
    (4, '');