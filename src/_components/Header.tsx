import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type HeaderProps = {
  titlePage: string[]
  onPressArrow: () => void
  fullName: string
  email: string
}

const Header = ({ titlePage, onPressArrow, fullName, email }: HeaderProps) => {
  const [isDropDownShow, setDropDown] = useState<boolean>(false)

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerItem} onPress={onPressArrow} activeOpacity={0.8}>
          <Icon name='arrow-left' size={30} color='white' />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          {titlePage.length > 1 ? (
            <>
              <Text style={styles.headerText}>{titlePage[0]}</Text>
              <Text style={styles.headerTextSmall}>{titlePage[1]}</Text>
            </>
          ) : (
            <Text style={styles.headerText}>{titlePage[0]}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.headerItem}
          onPress={() => setDropDown(!isDropDownShow)}
          activeOpacity={0.8}>
          <Icon name='menu' size={30} color='white' />
        </TouchableOpacity>
      </View>
      {isDropDownShow && (
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownHeader}>
            <View style={styles.dropdownIconContainer}>
              <Icon name='account' size={50} color='#DCE5F1' style={styles.dropdownIcon} />
            </View>
            <View style={styles.dropdownTextContainer}>
              <Text style={styles.dropdownTextName}>{fullName}</Text>
              <Text style={styles.dropdownTextEmail}>{email}</Text>
            </View>
          </View>
          <View style={styles.dropdownContent}>
            <View style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>My Profile</Text>
            </View>
            <View style={styles.dropdownList}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.dropdownListItemText}>Language</Text>
                <View
                  style={{
                    backgroundColor: '#DCE5F1',
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                  }}>
                  <Text style={{ fontSize: 16 }}>English</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text style={styles.dropdownListItemText}>Sign Out</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.087,
    backgroundColor: '#8000ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 26,
  },
  headerTextSmall: {
    fontSize: 18,
    color: 'white',
    marginTop: -5,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 60,
    right: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: 270,
    elevation: 20,
    height: 250,
    zIndex: 0,
  },
  dropdownHeader: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#DCE5F1',
  },
  dropdownIconContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
  dropdownIcon: {
    borderWidth: 1,
    padding: 3,
    backgroundColor: '#F8FBFF',
    borderColor: 'white',
  },
  dropdownTextContainer: {
    flex: 1,
  },
  dropdownTextName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  dropdownTextEmail: {
    color: 'black',
    fontStyle: 'italic',
  },
  dropdownContent: {
    flex: 1,
  },
  dropdownItem: {
    flex: 0.5,
    borderBottomWidth: 1,
    borderColor: '#DCE5F1',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  dropdownItemText: {
    color: '#7e8299',
    fontSize: 17.2,
    fontWeight: '700',
  },
  dropdownList: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 5,
  },
  dropdownListItemText: {
    color: '#7e8299',
    fontSize: 17.2,
    fontWeight: '700',
  },
})

export default Header
