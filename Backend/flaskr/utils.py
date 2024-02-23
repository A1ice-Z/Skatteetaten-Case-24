'''
All the utility used by the flask application.

'''

def bracket_tax(income: int) -> int:
    '''
    Calculates your tax based on the different income brackets
    '''
    if income < 0:
        return 0
    
    bracket_tax_1 = 0.017
    bracket_tax_2 = 0.04
    bracket_tax_3 = 0.136
    bracket_tax_4 = 0.166
    bracket_tax_5 = 0.176

    tax_bound_1 = 208050
    tax_bound_2 = 292850 
    tax_bound_3 = 670000 
    tax_bound_4 = 937900 
    tax_bound_5 = 1350000 

    if income <= tax_bound_1:
        return 0
    elif income <= tax_bound_2:
        return (income - tax_bound_1) * bracket_tax_1
    elif income <= tax_bound_3:
        return (tax_bound_2 - tax_bound_1) * bracket_tax_1 + (income - tax_bound_2) * bracket_tax_2
    elif income <= tax_bound_4:
        return (tax_bound_2 - tax_bound_1) * bracket_tax_1 + (tax_bound_3 - tax_bound_2) * bracket_tax_2 + (income - tax_bound_3)*bracket_tax_3
    elif income <= tax_bound_5:
        return (tax_bound_2 - tax_bound_1) * bracket_tax_1 + (tax_bound_3 - tax_bound_2) * bracket_tax_2 + (tax_bound_4 - tax_bound_3) * bracket_tax_3 + (income - tax_bound_4) * bracket_tax_4
    return (tax_bound_2 - tax_bound_1) * bracket_tax_1 + (tax_bound_3 - tax_bound_2) * bracket_tax_2 + (tax_bound_4 - tax_bound_3) * bracket_tax_3 + (tax_bound_5 - tax_bound_4) * bracket_tax_4 + (income - tax_bound_5) * bracket_tax_5

def household_tax_deduction(number_of_children: int, marital_status: bool) -> int:
    '''
    Deducts 18000 kroners from your tax for every child you have if your a single parent, and if your married 10000 kroners is deducted from your tax
    If your married but do not have children then there's no deduction in the tax
    There is a upper bound of eight children. If you have more than eoight children you will still just get a deduction of 72000 kroners from your tax
    '''
    if number_of_children > 8:
        if marital_status:
            return 800000
        return 144000
    if marital_status:
        return 10000 * number_of_children
    return 18000 * number_of_children

def net_savings_tax(savings: int, debt: int) -> int:
    '''
    Calculates your net savings tax based on what you have in savings and debt
    '''
    net_savings_tax_1 = 0.01
    net_savings_tax_2 = 0.011

    net_savings_tax_bound_1 = 1700000
    net_savings_tax_bound_2 = 20000000

    net_saving = savings - debt
    if net_saving <= net_savings_tax_bound_1:
        return 0
    elif net_saving <= net_savings_tax_bound_2:
        return (net_saving - net_savings_tax_bound_1)*net_savings_tax_1
    return (net_savings_tax_bound_2-net_savings_tax_bound_1)*net_savings_tax_1 + (net_saving-net_savings_tax_bound_2)*net_savings_tax_2

def total_tax(income: int, savings: int, debt: int, number_of_children: int, marital_status: bool) -> int:
    total_tax = bracket_tax(income) + net_savings_tax(savings, debt) - household_tax_deduction(number_of_children, marital_status)
    if total_tax < 0:
        return 0
    return total_tax

def percent(total_tax: int, income: int) -> int:
    return total_tax/income *100