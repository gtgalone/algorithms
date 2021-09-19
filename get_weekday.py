def getWeekday(timestamp):
  year = int(timestamp[:4])

  month = int(timestamp[4:6])

  day = int(timestamp[6:])

  if month == 1:

    month = month + 12

    year = year - 1

  elif month == 2:

    month = month + 12

    year = year - 1

  year_cen = (year%100)

  zero_cen = (year//100)

  day_of_the_week = (day + ((26 * (month + 1)) // (10)) + year_cen + ((year_cen) // (4)) + ((zero_cen) // (4)) + (5 * zero_cen)) % 7

  if day_of_the_week == 0:
    print('Saturday')

  elif day_of_the_week == 1:
    print('Sunday')

  elif day_of_the_week == 2:
    print('Monday')

  elif day_of_the_week == 3:
    print('Tuesday')

  elif day_of_the_week == 4:
    print('Wednesday')

  elif day_of_the_week == 5:
    print('Thursday')

  elif day_of_the_week == 6:
    print('Friday')

getWeekday('20200921')
