const formatDate = (date: string) => {
    const [year, month, day] = date.split('T')[0].split('-');
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}

export default formatDate;