export default function Keys({ synthKeys, showKeys, onClick, onKeyDown, onKeyUp }) {
  const keyButtons = synthKeys.map((key) => {
    const { displayName, computerKey, keyName, color } = key
    const activeClass = key.keyPressed ? 'active' : undefined
    const keyClassName = ['key', keyName, color, activeClass].join(' ')
    const keyNameToShow = showKeys.musicKeys
      ? displayName
      : showKeys.computerKeys
      ? computerKey
      : ''

    return (
      <button
        key={keyName}
        className={keyClassName}
        data-note={keyName}
        autoFocus={keyName === 'c2' ? true : false}
        // onClick={onClick}
        onMouseDown={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      >
        {keyNameToShow}
      </button>
    )
  })

  return <div className='keys-container'>{keyButtons}</div>
}
