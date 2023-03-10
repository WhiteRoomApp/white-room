import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 24,
  },
  text: {
    fontSize: 14,
    color: SECONDARY_COLOR,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 24,
    marginRight: 24,
  },
  textInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    color: SECONDARY_COLOR,
    paddingHorizontal: 8,
    justifyContent: 'flex-start',
    height: 36,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
    width: 144,
    height: 36,
    alignSelf: 'center',
  },
  buttonsContainer: {
    bottom: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },

  headerTitle: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    color: '#666',
  },
  list: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 5,
  },
  modal: {
    flex: 1,
    //  backgroundColor: '#666',
    marginHorizontal: 10,
    marginTop: 144,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    //  overflow: 'hidden',
  },
});
