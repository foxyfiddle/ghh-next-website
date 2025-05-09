export const getWrittenMonth = (startMonth: number, endMonth: number): { writtenStartMonth: string; writtenEndMonth: string } => {
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Augu',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  return {
    writtenStartMonth: monthNames[startMonth - 1] || '',
    writtenEndMonth: monthNames[endMonth - 1] || ''
  };
    
}