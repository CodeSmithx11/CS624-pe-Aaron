import { StyleSheet } from 'react-native';

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
  },
  cardList: {
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 140,
    height: 200, // ← Increased to show name + title always
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    padding: 10,
  },
  cardContainerExpanded: {
    width: 300,
    height: 400,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  titleText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    paddingTop: 10,
    lineHeight: 16,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;
