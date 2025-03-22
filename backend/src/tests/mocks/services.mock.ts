// Mock para servicios externos utilizados en la aplicación

interface FileUpload {
  originalname: string;
  [key: string]: unknown;
}

/**
 * Mock para servicios de almacenamiento de archivos
 */
export const storageServiceMock = {
  // Mock para subida de archivos
  uploadFile: jest.fn().mockImplementation((file: FileUpload) => {
    return Promise.resolve({
      success: true,
      url: `https://mockcloud.storage.com/${file.originalname}`,
      key: `uploads/${Date.now()}_${file.originalname}`
    });
  }),
  
  // Mock para eliminación de archivos
  deleteFile: jest.fn().mockImplementation((fileKey: string) => {
    return Promise.resolve({
      success: true,
      message: `Archivo ${fileKey} eliminado correctamente`
    });
  }),
  
  // Mock para generación de URL firmadas
  getSignedUrl: jest.fn().mockImplementation((fileKey: string) => {
    return Promise.resolve({
      success: true,
      url: `https://mockcloud.storage.com/signed/${fileKey}?signature=abc123&expires=3600`
    });
  })
};

/**
 * Mock para servicios de envío de emails
 */
export const emailServiceMock = {
  // Mock para envío de emails genéricos
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  sendEmail: jest.fn().mockImplementation((_to: string, _subject: string, _content: string) => {
    return Promise.resolve({
      success: true,
      messageId: `mock-${Date.now()}@mockmail.com`
    });
  }),
  
  // Mock para envío de emails de recuperación de contraseña
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  sendPasswordReset: jest.fn().mockImplementation((_user: unknown, _resetToken: string) => {
    return Promise.resolve({
      success: true,
      messageId: `reset-${Date.now()}@mockmail.com`
    });
  }),
  
  // Mock para envío de emails de bienvenida
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  sendWelcomeEmail: jest.fn().mockImplementation((_user: unknown) => {
    return Promise.resolve({
      success: true,
      messageId: `welcome-${Date.now()}@mockmail.com`
    });
  })
};

/**
 * Mock para servicios de notificaciones push
 */
export const pushNotificationServiceMock = {
  // Mock para envío de notificaciones push
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  sendPushNotification: jest.fn().mockImplementation((userId: string, title: string, body: string) => {
    return Promise.resolve({
      success: true,
      notificationId: `notification-${userId}-${title.length}-${body.length}-${Date.now()}`
    });
  }),
  
  // Mock para envío de notificaciones a múltiples usuarios
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  sendBulkPushNotification: jest.fn().mockImplementation((userIds: string[], title: string, body: string) => {
    return Promise.resolve({
      success: true,
      sent: userIds.length,
      notificationIds: userIds.map(id => `notification-${id}-${title.length}-${body.length}-${Date.now()}`)
    });
  })
};

/**
 * Mock para servicios de pago
 */
export const paymentServiceMock = {
  // Mock para procesar pagos
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  processPayment: jest.fn().mockImplementation((amount: number, _paymentMethod: string, _customerId: string) => {
    return Promise.resolve({
      success: true,
      transactionId: `txn-${Date.now()}`,
      amount,
      status: 'completed'
    });
  }),
  
  // Mock para reembolsos
  processRefund: jest.fn().mockImplementation((transactionId: string, amount: number) => {
    return Promise.resolve({
      success: true,
      refundId: `refund-${transactionId}-${Date.now()}`,
      amount,
      status: 'refunded'
    });
  })
};

/**
 * Utilidad para resetear todos los mocks
 */
export const resetAllMocks = () => {
  // Resetear contadores y comportamiento de los mocks
  storageServiceMock.uploadFile.mockClear();
  storageServiceMock.deleteFile.mockClear();
  storageServiceMock.getSignedUrl.mockClear();
  
  emailServiceMock.sendEmail.mockClear();
  emailServiceMock.sendPasswordReset.mockClear();
  emailServiceMock.sendWelcomeEmail.mockClear();
  
  pushNotificationServiceMock.sendPushNotification.mockClear();
  pushNotificationServiceMock.sendBulkPushNotification.mockClear();
  
  paymentServiceMock.processPayment.mockClear();
  paymentServiceMock.processRefund.mockClear();
}; 