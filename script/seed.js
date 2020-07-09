'use strict'

const db = require('../server/db')
const {User, Event, UserEvent, Poll, Response} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({name: 'Mary', email: 'mary@email.com', password: '123'}),
    User.create({
      name: 'Jennifer',
      email: 'jennifer@email.com',
      password: '123',
    }),
    User.create({name: 'Yang', email: 'yang@email.com', password: '123'}),
    User.create({name: 'Lilly', email: 'lilly@email.com', password: '123'}),
  ])

  console.log(`seeded ${users.length} users`)

  const events = await Promise.all([
    Event.create({
      name: 'Saturday Brunch',
      startTime: new Date('2020-07-11 12:00'),
      endTime: new Date('2020-07-11 15:00'),
      activityType: 'restaurant',
      city: 'new+york',
      neighborhood: 'soho',
      initialDueDate: new Date('2020-07-11 12:00'),
    }),
    Event.create({
      name: 'Girlz Night',
      startTime: new Date('2020-07-17 18:00'),
      endTime: new Date('2020-07-17 21:00'),
      activityType: 'restaurant',
      city: 'new+york',
      neighborhood: 'east+village',
    }),
  ])

  console.log(`seeded ${events.length} events`)

  const userEvent = await Promise.all([
    UserEvent.create({isOrganizer: true, userId: 1, eventId: 1}),
    UserEvent.create({isOrganizer: false, userId: 2, eventId: 1}),
    UserEvent.create({isOrganizer: false, userId: 3, eventId: 1}),
    UserEvent.create({isOrganizer: true, userId: 1, eventId: 2}),
    UserEvent.create({isOrganizer: false, userId: 2, eventId: 2}),
    UserEvent.create({isOrganizer: false, userId: 3, eventId: 2}),
    UserEvent.create({isOrganizer: false, userId: 4, eventId: 2}),
  ])

  console.log(`seeded ${userEvent.length} userEvents`)

  const poll = await Promise.all([
    Poll.create({
      name: 'activity',
      textOptions: ['breakfast+brunch', 'dimsum', 'creperies', 'new+american'],
      eventId: 1,
    }),
    Poll.create({
      name: 'activity',
      textOptions: [
        'afghani',
        'african',
        'senegalese',
        'south+african',
        'new+american',
        'american',
        'arabian',
        'argentine',
        'armenian',
        'asian+fusion',
        'australian',
        'austrian',
        'bangladeshi',
        'bbq',
        'basque',
        'belgian',
        'brasseries',
        'brazilian',
        'breakfast+brunch',
        'pancakes',
        'british',
        'buffets',
        'bulgarian',
        'burgers',
        'burmese',
        'cafes',
        'cafeteria',
        'cajun',
        'cambodian',
        'caribbean',
        'dominican',
        'haitian',
        'puerto+rican',
        'trinidadian',
        'catalan',
        'cheesesteaks',
        'chickenshop',
        'chicken+wings',
        'chinese',
        'cantonese',
        'dimsum',
        'hainan',
        'shanghainese',
        'szechuan',
        'comfort+food',
        'creperies',
        'cuban',
        'czech',
        'delis',
        'diners',
        'eritrean',
        'ethiopian',
        'hotdogs',
        'filipino',
        'fish+chips',
        'fondue',
        'foodstands',
        'french',
        'mauritius',
        'gastropubs',
        'georgian',
        'german',
        'gluten+free',
        'greek',
        'guamanian',
        'halal',
        'hawaiian',
        'himalayan',
        'honduran',
        'hotdog',
        'hotpot',
        'hungarian',
        'iberian',
        'indian',
        'indonesian',
        'irish',
        'italian',
        'calabrian',
        'sardinian',
        'sicilian',
        'tuscan',
        'japanese',
        'izakaya',
        'japanese+curry',
        'ramen',
        'teppanyaki',
        'kebab',
        'korean',
        'kosher',
        'laotian',
        'latin',
        'colombian',
        'salvadoran',
        'venezuelan',
        'raw+food',
        'malaysian',
        'mediterranean',
        'falafel',
        'mexican',
        'tacos',
      ],
      eventId: 2,
    }),
    Poll.create({
      name: 'suggestions',
      textOptions: [
        'e47007f66cdc681f24c19060fbacd85d743045e7',
        'ChIJ5WwRiJxZwokRqwn5bsM15ek',
        'ChIJ8UwiNndZwokRdRVevqF6DWw',
      ],
      eventId: 2,
    }),
  ])

  console.log(`seeded ${poll.length} polls`)

  const response = await Promise.all([
    Response.create({
      textSelections: ['dimsum'],
      pollId: 1,
      userId: 1,
    }),
    Response.create({
      textSelections: ['breakfast+brunch', 'dimsum', 'creperies'],
      pollId: 1,
      userId: 2,
    }),
    Response.create({
      textSelections: ['dimsum', 'creperies', 'new+american'],
      pollId: 1,
      userId: 3,
    }),
    Response.create({
      textSelections: [
        'afghani',
        'african',
        'senegalese',
        'south+african',
        'new+american',
        'american',
        'arabian',
        'argentine',
        'armenian',
        'asian+fusion',
        'australian',
        'austrian',
        'bangladeshi',
        'bbq',
        'basque',
        'belgian',
        'brasseries',
        'brazilian',
        'breakfast+brunch',
        'pancakes',
        'british',
        'buffets',
        'bulgarian',
        'burgers',
        'burmese',
        'cafes',
        'cafeteria',
        'cajun',
        'cambodian',
        'caribbean',
        'dominican',
        'haitian',
        'puerto+rican',
        'trinidadian',
        'catalan',
        'cheesesteaks',
        'chickenshop',
        'chicken+wings',
        'chinese',
        'cantonese',
        'dimsum',
        'hainan',
        'shanghainese',
        'szechuan',
        'comfort+food',
        'creperies',
        'cuban',
        'czech',
        'delis',
        'diners',
        'eritrean',
        'ethiopian',
        'hotdogs',
        'filipino',
        'fish+chips',
        'fondue',
        'foodstands',
        'french',
        'mauritius',
        'gastropubs',
        'georgian',
        'german',
        'gluten+free',
        'greek',
        'guamanian',
        'halal',
        'hawaiian',
        'himalayan',
        'honduran',
        'hotdog',
        'hotpot',
        'hungarian',
        'iberian',
        'indian',
        'indonesian',
        'irish',
        'italian',
        'calabrian',
        'sardinian',
        'sicilian',
        'tuscan',
        'japanese',
        'izakaya',
        'japanese+curry',
        'ramen',
        'teppanyaki',
        'kebab',
        'korean',
        'kosher',
        'laotian',
        'latin',
        'colombian',
        'salvadoran',
        'venezuelan',
        'raw+food',
        'malaysian',
        'mediterranean',
        'falafel',
        'mexican',
        'tacos',
      ],
      pollId: 2,
      userId: 1,
    }),
    Response.create({
      textSelections: ['tacos', 'colombian', 'french'],
      pollId: 2,
      userId: 2,
    }),
    Response.create({
      textSelections: ['bbq', 'tacos', 'mediterranean', 'falafel'],
      pollId: 2,
      userId: 3,
    }),
  ])

  console.log(`seeded ${response.length} responses`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
