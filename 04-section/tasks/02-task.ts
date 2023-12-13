// Перепешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash",
    "card",
    "credit"
  }
  
  interface IPerson {
    name: string;
    surname: string;
    dateBirthday: Date;
  }
  
  interface IDelivery {
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    detiveryTime?: string;
  }

  interface IPayment {
    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency: "EUR" | "USD" | "RUB";
  }

  interface ICustomer extends IPerson, IDelivery, IPayment {}
