//#region Aspects
export const FullSize = 'h-screen w-screen';
export const MainPadding = 'px-5 py-3';
//#endregion

//#region Interactions
export const Scale110Hover500 = 'hover:scale-110 hover:duration-500 hover:ease-in-out';
export const Scale150Hover500 = 'hover:scale-150 hover:duration-500 ease-in-out';
export const BrandTextHoverStyle = `hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-400 ${Scale110Hover500}`
//#endregion

//#region Flex/Grid
export const RowCenteredItems = 'flex items-center';
export const RowCenteredItemsJustifiedAround = 'flex items-center flex-1 justify-around';
export const RowCenteredJustified = 'flex justify-center';
export const RowJustifiedBetween = 'flex justify-between';
export const RowJustifiedAround = 'flex justify-around';
export const Column = 'flex flex-col';
export const ColumnCenterdItems = 'flex flex-col items-center';
export const ColumnCenterdItemsJustifiedCenter = 'flex flex-col items-center justify-center';

//#endregion

//#region  colors/styles
export const MainBgColor = 'bg-gray-200';
export const MainBgGradient = 'bg-gradient-to-r from-gray-500 to-gray-900';
export const MainBgGradientReversed = 'bg-gradient-to-l from-gray-500 to-gray-900';
export const GradientText = 'text-transparent bg-clip-text bg-gradient-to-tr from-gray-400 from-35%'
export const GradientTextII = 'text-gray-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-900'
export const MainHeaderGradientText = 'bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400'

//#endregion

export const MainStyles = {
    FullSize,
    MainPadding,
    Scale110Hover500,
    Scale150Hover500,
    BrandTextHoverStyle,
    RowCenteredItems,
    RowCenteredItemsJustifiedAround,
    RowCenteredJustified,
    RowJustifiedBetween,
    RowJustifiedAround,
    Column,
    ColumnCenterdItems,
    ColumnCenterdItemsJustifiedCenter,
    MainBgColor,
    MainBgGradient,
    GradientText,
    GradientTextII,
    MainHeaderGradientText
}