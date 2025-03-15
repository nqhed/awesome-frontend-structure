import dateFns from "./date-fns";

export function getDateFormat_yyyyMMdd_hyphen({
  datetime,
}: {
  datetime?: string | Date;
}) {
  if (datetime) {
    const newDate = dateFns.format(datetime.toString(), "yyyy-MM-dd");
    return newDate;
  }

  throw Error("datetime must be a string or date");
}

export function getDateFormat_yyyyMMdd_slash({
  datetime,
}: {
  datetime?: string | Date;
}) {
  if (datetime) {
    const newDate = dateFns.format(datetime.toString(), "yyyy/MM/dd");
    return newDate;
  }

  throw Error("datetime must be a string or date");
}
