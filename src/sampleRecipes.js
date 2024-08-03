const sampleRecipes = [
    // Continental Recipes
    {
      id: 1,
      title: 'Spicy Spaghetti ',
      image: 'https://veganwithgusto.com/wp-content/uploads/2024/01/spicy-spaghetti-arrabbiata-on-plate.jpg',
      type: 'continental',
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan cheese', 'Black pepper'],
      instructions: `Cook the spaghetti according to the package instructions.
            In a bowl, beat the eggs and mix in the grated Parmesan cheese.
            In a pan, cook the pancetta until crispy.
            Drain the spaghetti and add it to the pan with the pancetta.
            Remove from heat and quickly mix in the egg and cheese mixture.
            Serve immediately with a sprinkle of black pepper.`,
      cookingTime: '20 minutes'
    },
    {
      id: 2,
      title: 'Chicken Alfredo',
      image: 'https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1080_850.jpg',
      type: 'continental',
      ingredients: ['Fettuccine', 'Chicken breast', 'Butter', 'Heavy cream', 'Parmesan cheese', 'Garlic', 'Parsley'],
      instructions: `Cook the fettuccine according to the package instructions.
            In a pan, melt the butter and cook the garlic until fragrant.
            Add the chicken and cook until no longer pink.
            Pour in the heavy cream and bring to a simmer.
            Stir in the Parmesan cheese until melted and the sauce is thickened.
            Toss the pasta with the sauce and garnish with chopped parsley.`,
      cookingTime: '30 minutes'
    },
    {
      id: 3,
      title: 'Beef Stroganoff',
      image: 'https://www.gimmesomeoven.com/wp-content/uploads/2020/10/Beef-Stroganoff-Recipe-9.jpg',
      type: 'continental',
      ingredients: ['Beef', 'Mushrooms', 'Onion', 'Sour cream', 'Beef broth', 'Butter', 'Flour', 'Paprika'],
      instructions: `Cook the beef in a pan until browned, then set aside.
            In the same pan, cook the mushrooms and onions until soft.
            Stir in the flour and paprika, then gradually add the beef broth.
            Return the beef to the pan and simmer until the sauce thickens.
            Stir in the sour cream and heat through.
            Serve over egg noodles or rice.`,
      cookingTime: '40 minutes'
    },
    // Thai Recipes
    {
      id: 4,
      title: 'Pad Thai',
      image: 'https://inquiringchef.com/wp-content/uploads/2023/02/Authentic-Pad-Thai-1923-1.jpg',
      type: 'thai',
      ingredients: ['Rice noodles', 'Shrimp', 'Tofu', 'Eggs', 'Bean sprouts', 'Peanuts', 'Green onions', 'Lime'],
      instructions: `Cook the rice noodles according to the package instructions.
            In a pan, cook the shrimp until pink, then set aside.
            Scramble the eggs in the same pan, then set aside.
            Add the tofu to the pan and cook until golden brown.
            Return the shrimp and eggs to the pan, and add the noodles.
            Toss with bean sprouts, chopped peanuts, and green onions.
            Serve with lime wedges.`,
      cookingTime: '25 minutes'
    },
    {
      id: 5,
      title: 'Thai Green Curry',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/11/Thai-green-curry-db08a11.jpg',
      type: 'thai',
      ingredients: ['Chicken', 'Green curry paste', 'Coconut milk', 'Eggplant', 'Bamboo shoots', 'Basil', 'Fish sauce'],
      instructions: `Cook the chicken in a pan until no longer pink.
            Add the green curry paste and stir until fragrant.
            Pour in the coconut milk and bring to a simmer.
            Add the eggplant and bamboo shoots, and cook until tender.
            Stir in the fish sauce and basil leaves.
            Serve with steamed rice.`,
      cookingTime: '35 minutes'
    },
    {
      id: 6,
      title: 'Tom Yum Soup',
      image: 'https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/06/tom-yum-12-1-sur-1.jpg?resize=1024%2C925&ssl=1',
      type: 'thai',
      ingredients: ['Shrimp', 'Mushrooms', 'Lemongrass', 'Kaffir lime leaves', 'Galangal', 'Fish sauce', 'Lime juice', 'Chili paste'],
      instructions: `Bring water to a boil and add the lemongrass, kaffir lime leaves, and galangal.
            Add the shrimp and mushrooms, and cook until the shrimp are pink.
            Stir in the fish sauce, lime juice, and chili paste.
            Serve hot, garnished with cilantro.`,
      cookingTime: '30 minutes'
    },
    // Chinese Recipes
    {
      id: 7,
      title: 'Sweet and Sour Beef',
      image: 'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e2/guid/Sweet-n-Sour-Chicken-and-Cabbage-Soup/7a77b804-f350-40c0-9817-186019e10b88.jpg',
      type: 'chinese',
      ingredients: ['Beef', 'Bell peppers', 'Pineapple', 'Vinegar', 'Ketchup', 'Sugar', 'Soy sauce', 'Cornstarch'],
      instructions: `Cook the Beef in a pan until browned, then set aside.
            In the same pan, cook the bell peppers until soft.
            Add the pineapple and cook for a few more minutes.
            In a bowl, mix the vinegar, ketchup, sugar, and soy sauce.
            Pour the sauce into the pan and bring to a simmer.
            Return the Beef to the pan and toss to coat.
            Serve with steamed rice.`,
      cookingTime: '45 minutes'
    },
    {
      id: 8,
      title: 'Kung Pao Chicken',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MZ0tkRTlu6cFWd7CKZbgXWxQTWGvu9ISHA&s',
      type: 'chinese',
      ingredients: ['Chicken', 'Bell peppers', 'Zucchini', 'Peanuts', 'Soy sauce', 'Hoisin sauce', 'Garlic', 'Ginger'],
      instructions: `Cook the chicken in a pan until no longer pink.
            Add the bell peppers and zucchini, and cook until tender.
            Stir in the garlic and ginger, and cook until fragrant.
            Add the peanuts and toss to coat.
            Pour in the soy sauce and hoisin sauce, and bring to a simmer.
            Serve with steamed rice.`,
      cookingTime: '30 minutes'
    },
    {
      id: 9,
      title: 'Beef and Broccoli',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZWbyNUlhealZVQbdtV5N-TAYps6jCk3XJA&s',
      type: 'chinese',
      ingredients: ['Beef', 'Broccoli', 'Soy sauce', 'Oyster sauce', 'Garlic', 'Ginger', 'Cornstarch', 'Sesame oil'],
      instructions: `Cook the beef in a pan until browned, then set aside.
            In the same pan, cook the broccoli until tender.
            Stir in the garlic and ginger, and cook until fragrant.
            Return the beef to the pan and toss to coat.
            Pour in the soy sauce and oyster sauce, and bring to a simmer.
            Serve with steamed rice.`,
      cookingTime: '35 minutes'
    }
  ];
  
  export default sampleRecipes;
  