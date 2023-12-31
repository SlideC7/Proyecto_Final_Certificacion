import { inject, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { startOfDay } from 'date-fns';
import localePl from '@angular/common/locales/pl';
import { CalendarAngularDateFormatter, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

describe('CalendarAngularDateFormatter provider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalendarAngularDateFormatter,
        {
          provide: DateAdapter,
          useFactory: adapterFactory,
        },
      ],
    });
  });

  let dateFormatter: CalendarAngularDateFormatter;
  beforeEach(inject([CalendarAngularDateFormatter], (_dateFormatter_) => {
    dateFormatter = _dateFormatter_;
  }));

  it('monthViewColumnHeader', () => {
    expect(
      dateFormatter.monthViewColumnHeader({
        date: new Date('2016-01-01'),
        locale: 'es',
      })
    ).to.equal('Friday');
  });

  it('monthViewDayNumber', () => {
    expect(
      dateFormatter.monthViewDayNumber({
        date: new Date('2016-01-01'),
        locale: 'es',
      })
    ).to.equal('1');
  });

  it('monthViewTitle', () => {
    expect(
      dateFormatter.monthViewTitle({
        date: new Date('2016-01-01'),
        locale: 'es',
      })
    ).to.equal('January 2016');
  });

  it('monthViewTitle in polish', () => {
    expect(
      dateFormatter.monthViewTitle({
        date: new Date('2016-01-01'),
        locale: 'pl',
      })
    ).to.equal('styczeń 2016');
  });

  it('weekViewColumnHeader', () => {
    expect(
      dateFormatter.weekViewColumnHeader({
        date: new Date('2016-01-01'),
        locale: 'es',
      })
    ).to.equal('Friday');
  });

  it('weekViewColumnSubHeader', () => {
    expect(
      dateFormatter.weekViewColumnSubHeader({
        date: new Date('2016-01-01'),
        locale: 'es',
      })
    ).to.equal('Jan 1');
  });

  it('weekViewTitle', () => {
    expect(
      dateFormatter.weekViewTitle({
        date: new Date('2016-01-04'),
        locale: 'es',
      })
    ).to.equal('Jan 3 - Jan 9, 2016');
  });

  it('weekViewHour', () => {
    expect(
      dateFormatter.weekViewHour({
        date: startOfDay(new Date('2016-01-01')),
        locale: 'es',
      })
    ).to.equal('12 AM');
  });

  it('dayViewHour', () => {
    expect(
      dateFormatter.dayViewHour({
        date: startOfDay(new Date('2016-01-01')),
        locale: 'es',
      })
    ).to.equal('12 AM');
  });

  it('dayViewTitle', () => {
    expect(
      dateFormatter.dayViewTitle({ date: new Date('2016-01-01'), locale: 'es' })
    ).to.equal('Friday, January 1, 2016');
  });
});
