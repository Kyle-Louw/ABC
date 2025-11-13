import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //home screen styles
    container: { flex: 1, padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold' },
    subtitle: { marginVertical: 8 },
    avgBox: { marginBottom: 16 },
    card: { borderWidth: 1, borderRadius: 8, padding: 8, marginVertical: 4 },
    cardTitle: { fontWeight: 'bold', fontSize: 18 },
    button: { backgroundColor: 'red', padding: 12, borderRadius: 8, marginTop: 8 },
    buttonText: { color: 'white', textAlign: 'center' },

    //filter screen styles
    container: { flex: 1, padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
    row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
    filterButton: { borderWidth: 1, borderRadius: 6, padding: 8 },
    filterButtonActive: { backgroundColor: 'red' },
    filterText: { color: 'white', fontWeight: 'bold' },
    card: { borderWidth: 1, borderRadius: 8, padding: 8, marginVertical: 4 },
    cardTitle: { fontWeight: 'bold', fontSize: 18 },

    //add item screen styles
    container: { flex: 1, padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
    input: { borderWidth: 1, borderRadius: 6, padding: 8, marginVertical: 6 },
    button: { backgroundColor: 'red', padding: 12, borderRadius: 8, marginTop: 10 },
    buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

export default styles;
