import { mock } from 'jest-mock-extended';
import { Model, Document } from 'mongoose';

type AnnounceDoc = Document & {
  message: string;
  channelId: string;
  frequency: string;
  lastPosted: Date;
};

const mockAnnounce = mock<Model<AnnounceDoc>>();

describe('Announce Model Test', () => {
  it('create & save announce successfully', async () => {
    const announceData = { message: 'Test message', channelId: '123456', frequency: 'mensal' };
    const savedAnnounce:any = { ...announceData, _id: 'mocked_id', lastPosted: new Date() };
    
    mockAnnounce.create.mockResolvedValue(savedAnnounce);
    
    const result = await mockAnnounce.create(announceData);

    expect(result._id).toBe('mocked_id');
    expect(result.message).toBe(announceData.message);
    expect(result.channelId).toBe(announceData.channelId);
    expect(result.frequency).toBe(announceData.frequency);
  });

  it('insert announce successfully, but the field not defined in schema should be undefined', async () => {
    const announceWithInvalidField = { message: 'Test message', channelId: '123456', frequency: 'mensal' };
    const savedAnnounce: any = { ...announceWithInvalidField, _id: 'mocked_id', lastPosted: new Date() } ;
    
    mockAnnounce.create.mockResolvedValue(savedAnnounce);
    
    const result = await mockAnnounce.create(announceWithInvalidField);

    expect(result._id).toBe('mocked_id');
    expect((result as any)['invalidField']).toBeUndefined();
  });
});
