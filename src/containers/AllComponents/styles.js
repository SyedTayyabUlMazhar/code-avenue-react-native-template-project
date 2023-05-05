import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrix} from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  listContentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 120,
  },
  pressableItems: {
    borderRadius: Metrix.Radius,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: Colors.Primary,
    borderWidth: Metrix.VerticalSize(1),
    padding: Metrix.HorizontalSize(15),
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    color: Colors.Primary,
    marginVertical: 5,
    textTransform: 'capitalize',
    fontFamily: Fonts['Montserrat-Bold'],
    marginLeft: 10,
  },
  icon: {
    fontSize: Metrix.customFontSize(20),
    color: Colors.Primary,
  },
  flatcolumnWrapperStyle: {
    flexWrap: 'wrap',
  },
  componentView: {
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: Colors.Primary,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default styles;
